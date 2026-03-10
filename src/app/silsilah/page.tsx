"use client";
import { useState, useCallback } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge, // Fungsi helper untuk menyambungkan garis
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import FamilyNode from "@/components/FamillyNode";

const nodeTypes = { familyNode: FamilyNode };

export default function Silsilah() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  // STATE BARU UNTUK ADMIN
  const [isAdmin, setIsAdmin] = useState(false);

  // FUNGSI UNTUK LOGIN ADMIN
  const handleAdminLogin = () => {
    if (isAdmin) {
      setIsAdmin(false); // Logout
      return;
    }

    const pin = prompt("Masukkan PIN Admin untuk mengedit silsilah:");
    // Ganti '123456' dengan PIN rahasiamu
    if (pin === "123456") {
      setIsAdmin(true);
      alert(
        "Akses Admin Diberikan. Anda sekarang bisa menambah anggota keluarga.",
      );
    } else if (pin !== null) {
      alert("PIN Salah!");
    }
  };

  // State untuk Form Tambah Orang
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    parentId: "",
  });

  // Fungsi Tambah Anggota
  const addNewMember = (e: React.FormEvent) => {
    e.preventDefault();

    const newNodeId = (nodes.length + 1).toString();
    const newNode = {
      id: newNodeId,
      type: "familyNode",
      // Kita beri posisi random sedikit agar tidak tumpang tindih
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {
        label: formData.name,
        role: formData.role,
        address: "Belum diisi",
        detail: "Anggota baru keluarga",
      },
    };

    setNodes((nds) => nds.concat(newNode));

    // Jika ada parent yang dipilih, otomatis buat garis (edge)
    if (formData.parentId) {
      const newEdge = {
        id: `e${formData.parentId}-${newNodeId}`,
        source: formData.parentId,
        target: newNodeId,
        animated: true,
        label: "anak",
      };
      setEdges((eds) => addEdge(newEdge, eds));
    }

    // Reset & Close Form
    setFormData({ name: "", role: "", parentId: "" });
    setShowForm(false);
  };

  return (
    <main className="h-screen w-full relative flex overflow-hidden bg-gray-50">
      {/* TOMBOL TAMBAH (Floating) */}
      <div className="absolute top-5 left-5 z-20 flex gap-3">
        <button
          onClick={handleAdminLogin}
          className={`px-4 py-2 rounded-full shadow-md font-bold transition-all text-sm ${
            isAdmin
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white text-gray-700 hover:bg-gray-100 border"
          }`}
        >
          {isAdmin ? "🔒 Keluar Mode Admin" : "🔑 Mode Admin"}
        </button>

        {/* TOMBOL TAMBAH (HANYA MUNCUL JIKA ADMIN) */}
        {isAdmin && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 font-bold transition-all text-sm"
          >
            + Tambah Keluarga
          </button>
        )}
      </div>

      <div className="grow">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          onNodeClick={(_, node) => setSelectedPerson(node.data)}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      {/* MODAL FORM TAMBAH ORANG */}
      {showForm && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <form
            onSubmit={addNewMember}
            className="bg-white p-8 rounded-xl shadow-xl w-96"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Tambah Anggota Baru
            </h3>
            <div className="space-y-4">
              <input
                placeholder="Nama Lengkap"
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none text-black"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                placeholder="Peran (misal: Anak ke-2)"
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none text-black"
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />
              <select
                className="w-full border p-2 rounded text-black outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, parentId: e.target.value })
                }
              >
                <option value="">Pilih Orang Tua (Opsional)</option>
                {nodes.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.data.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end mt-6 gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-gray-500"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}

      {/* SIDEBAR DETAIL (Tetap ada dari kode sebelumnya) */}
      {selectedPerson && (
        <div className="w-80 bg-white shadow-2xl p-6 border-l absolute right-0 h-full z-10 transition-all text-black">
          <button
            onClick={() => setSelectedPerson(null)}
            className="text-gray-400 hover:text-black mb-4 font-bold"
          >
            ✕ Tutup
          </button>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full mb-4 border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold text-2xl">
              {selectedPerson.label.charAt(0)}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedPerson.label}
            </h2>
            <p className="text-blue-600 font-medium mb-6">
              {selectedPerson.role}
            </p>
          </div>
          <div className="border-t pt-4 space-y-4">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Lokasi
              </p>
              <p className="text-gray-700">{selectedPerson.address}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Catatan
              </p>
              <p className="text-gray-700">{selectedPerson.detail}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
