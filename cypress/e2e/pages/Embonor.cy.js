import EmbonorHome from "../components/EmbonorHome/EmbonorHome-components";
const embonorHome = new EmbonorHome;
describe('Piloto de embonor', () => {
    it('Login con usuario y contrseña', () => {
        embonorHome.navigate();
        embonorHome.fillFormAndSubmit();
        embonorHome.loginClick();
        embonorHome.portalApp();
        embonorHome.desplegables();

    })
})