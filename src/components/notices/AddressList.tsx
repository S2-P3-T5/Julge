interface AddressListProps {
  address: string[];
  setAddress: (value: string[]) => void;
}

export default function AddressList({ address, setAddress }: AddressListProps) {
  const handleAddress = (value: string) => {
    const deletedAddress = address.filter((address) => address !== value);
    setAddress(deletedAddress);
  };

  return (
    <div>
      <ul>
        {address.map((address: string) => (
          <li key={address}>
            {address}
            <button onClick={() => handleAddress(address)}>{"X"}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
