class LuzARElement {
    constructor(scene, clickeables) {
        this.model = new ARModel(
            scene,
            new URL('Models/LuzPopUp.glb', window.location.origin + window.location.pathname.split('/').slice(0, 2).join('/') + '/').href,
            {
                x: 1.5,
                y: 2,
                z: 1.75
            },
            {
                x: 0.25,
                y: 0.25,
                z: 0.25
            },
            {
                x: 0,
                y: 3*Math.PI/2,
                z: 0,
            },
            false
        );

        this.clickeable = new ClickableCube(
            scene,
            {
                x: 1.45,
                y: 0.75,
                z: 1.6
            },
            {
                x: 0.25,
                y: 1.0,
                z: 0.25
        });
        this.clickeable.onClick(() => {
            let newState = !this.model.model.visible;
            scene.hideTARObjects();
            this.model.setVisible(newState);
        });
        clickeables.push(this.clickeable);
        scene.TARObjects.push(this);
    }
}