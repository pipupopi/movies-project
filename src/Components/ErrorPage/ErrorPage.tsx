import React from "react";

function ErrorPage() {
  return (
    <>
      <h1 style={{ color: "#b2e560" }}>
        упс, произошла ошибка, извините. попробуйте перезагрузить
        страницу или подождать.
      </h1>
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/jfKfPfyJRdk"
        title="lofi hip hop radio - beats to relax/study to"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
}

export { ErrorPage };
