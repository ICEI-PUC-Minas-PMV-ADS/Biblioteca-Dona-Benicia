export default function Example({ nome }: { nome: string }) {
  return (
    <div className="bg-gray-200 py-4">
      <p className="text-gray-800 text-lg font-bold text-center">{nome}</p>
    </div>
  );
}
