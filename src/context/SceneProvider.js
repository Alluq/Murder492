import { createContext, useState } from 'react';

//create a context, with createContext api
export const sceneContext = createContext();

const SceneProvider = (props) => {
        // this state will be shared with all components 
    const [sceneCounter, setSceneCounter] = useState(1);

    return (
                // this is the provider providing state
        <sceneContext.Provider value={[sceneCounter, setSceneCounter]}>
            {props.children}
        </sceneContext.Provider>
    );
};

export default SceneProvider;