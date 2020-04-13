import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.4:3000'
})

export default api;

/*
* IOS com emulador: localhost
* IOS com físico: IP da máquina (localhost)
* Android com emulador: {
*    adb reverse tcp:PORT tcp:PORT
*                   myPC    emulator
* }
* Android com emulador: 10.0.2.2 (Android Studio)
* Android com emulador: 10.0.3.2 (Genymotion)
* Android com físico: IP da máquina
*/