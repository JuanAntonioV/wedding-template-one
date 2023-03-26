import Particles from "react-tsparticles";
import {useCallback} from "react";
import {loadFull} from "tsparticles";

const RandomParticles = () => {
    // @ts-ignore
    const init = useCallback(async (engine: any) => {
        await loadFull(engine)
    });

    return (
        <Particles
            init={init}
            options={{
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#fff",
                    },
                    number: {
                        value: 100,
                    },
                    opacity: {
                        value: {
                            min: 0.3,
                            max: 1,
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 5,
                        }
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "bottom",
                        random: true,
                    },
                    zIndex: {
                        value: 50,
                    },
                }
            }}
        />
    );
};

export default RandomParticles;