import { useState, ChangeEvent, FormEvent } from "react";

interface RegisterFormState {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const [newRegister, setRegister] = useState<RegisterFormState>({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://10.24.31.35:3333/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRegister),
      });

      if (!response.ok) {
        throw new Error("Resposta da rede não foi ok");
      }

      const result = await response.json();
      setMessage("Registro bem-sucedido!");
      console.log("Dados recebidos do backend:", result);
    } catch (error) {
      setMessage("Erro durante o registro. Tente novamente.");
      console.error("Erro durante o registro:", error);
    }
  };

  return (
    <div>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newRegister.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newRegister.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={newRegister.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
