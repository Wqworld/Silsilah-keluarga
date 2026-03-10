import { Handle, Position } from '@xyflow/react';
import Image from 'next/image';

type FamilyNodeProps = {
  id: number;
  photo: string;
  label: string;
  role: string;
};

export default function FamilyNode({data} : {data: FamilyNodeProps}) {
  return (
    <div className="px-4 py-2 shadow-lg rounded-md bg-white border-2 border-blue-500 min-w-37.5">
      {/* Handle adalah titik koneksi garis */}
      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-blue-500!" />
      
      <div className="flex flex-col items-center">
        {/* Placeholder Foto */}
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-2 overflow-hidden flex items-center justify-center border border-gray-300">
          {data.photo ? (
            <Image src={data.photo} alt={data.label} className="object-cover w-full h-full" />
          ) : (
            <span className="text-xs text-gray-400">Foto</span>
          )}
        </div>
        
        <div className="text-sm font-bold text-gray-800">{data.label}</div>
        <div className="text-[10px] text-gray-500">{data.role || 'Anggota'}</div>
      </div>

      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-blue-500!" />
    </div>
  );
}