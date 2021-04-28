import { lazy } from "react";
import ReactPlayer from 'react-player'

const ScrollToTop = la  zy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const videos = [
    { title: "Uma wild DENM aparece", url: "video/denm_appearing.mp4" },
    { title: "Auto-estrada com DENM", url: "video/highway_vith_denm.mp4" },
    { title: "Alterar o idioma", url: "video/laguage_switching.mp4" },
    { title: "Enviar DENM no browser", url: "video/send__denm_pc.mp4" },
  return (
    <>
      <div id="intro"></div>
      <ScrollToTop />
      <div style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
        {videos.map((item, index) => {
          return (
            <div key={index} style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <h1>{item.title}</h1>
              <ReactPlayer url={item.url} controls={true} />
            </div>
          )
        })}
      </div>
    </>
  );
};

const styles = {
  centeredDiv: {
    display: "flex",
    justifyContent: "center"
  }
};

export default Home;
