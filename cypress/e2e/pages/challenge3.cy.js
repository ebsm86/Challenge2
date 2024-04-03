import RegistroMaveen from "../components/loginnaveen/loginnaveen-components";
const registroMaveen = new RegistroMaveen();

describe('Registro y busquwda de aritculo', () => {
    it('Login con usuario y contrseña', () => {
        registroMaveen.navigate();
        registroMaveen.fillFormAndSubmit();
        registroMaveen.loginClick();
        registroMaveen.searchType();
        registroMaveen.LogOut();
    })
})
