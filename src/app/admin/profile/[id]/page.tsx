interface UserProps {
    params: {
        id: string
    }
}

export default function AdminProfile(props:any) {
  return (
    <div>
        <p>Bem-vindo admin{props.params.id}</p>
    </div>
  );
}
