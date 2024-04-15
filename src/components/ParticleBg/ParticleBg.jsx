import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticleSnowConfig from "../ParticleSnowConfig/ParticleSnowConfig";
import Container from "../Container/Container";

const ParticleBg = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => (ParticleSnowConfig ? ParticleSnowConfig : {}),
    []
  );

  if (init) {
    return (
      <Container>
        <Particles className="w-full  h-screen" options={options} />
      </Container>
    );
  }

  return <></>;
};

export default ParticleBg;
