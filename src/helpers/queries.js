const backendColores = import.meta.env.VITE_API_COLORES;

export const listarColoresAPI = async () => {
  try {
    const respuesta = await fetch(backendColores);
    console.log(respuesta);
    return respuesta;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const crearColorAPI = async (color) => {
  try {
    const respuesta = await fetch(backendColores, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(color),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};
