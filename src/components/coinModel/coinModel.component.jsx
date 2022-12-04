import "./coinModel.styles.scss"
import Coin from "../../assets/gltf/coin/Coin";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const CoinModel = () => {
    return (
        <div className="heading_canvas">
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.2} />
                <directionalLight intensity={0.5} position={[-2, 1, 4]} />
                <directionalLight intensity={0.5} position={[2, 1, -4]} />
                <Coin />
            </Canvas>
        </div>
    )
}

export default CoinModel;