import { useState } from "react";

interface Props {
  value: string;
  onSelect: (address: string) => void;
}

const AddressAutocomplete = ({ value, onSelect }: Props) => {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<any[]>([]);

  const searchAddress = async (text: string) => {
    setQuery(text);

    if (text.length < 3) {
      setResults([]);
      return;
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${text}&addressdetails=1&limit=5`
    );
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="relative">
      <input
        value={query}
        onChange={(e) => searchAddress(e.target.value)}
        placeholder="Search delivery address"
        className="w-full border rounded-md px-3 py-2"
      />

      {results.length > 0 && (
        <div className="absolute z-50 w-full bg-white border rounded-md mt-1 shadow">
          {results.map((item) => (
            <div
              key={item.place_id}
              onClick={() => {
                onSelect(item.display_name);
                setQuery(item.display_name);
                setResults([]);
              }}
              className="px-3 py-2 text-sm cursor-pointer hover:bg-muted"
            >
              {item.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
