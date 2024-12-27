// import "../styles/globals.css";
export default function Custom404() {
  return (
      <>
      <div
        style={{
          textAlign: "center",
          padding: "150px",
          fontSize: "50px",
          color: "#fff",
          fontFamily:"Roboto-Medium"
        }}
      >
          <h1>404 - Страница не найдена</h1>
          <p>К сожалению, мы не смогли найти запрашиваемую страницу.</p>
        <a href="/"
          style={{
            color: "inherit",
          }}>
            Вернуться на главную
          </a>
      </div>
      
      </>
      );
  }