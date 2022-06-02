import os from 'os'

export const getAddress = (port: string) => {
    const networkInterfaces = os.networkInterfaces()
    var publicIp = ''
    if (networkInterfaces['Wi-Fi'] !== undefined) {
        networkInterfaces['Wi-Fi'].forEach(wifi => {
            if (wifi.family === 'IPv4') {
                publicIp = `http://${wifi.address}:${port}`
            }
        })
        if (publicIp === '') {
            publicIp = "Aucune adresse IPv4 n'a été trouvée pour ce réseau Wi-Fi !"
        }
    }
    else if (networkInterfaces['Ethernet'] !== undefined) {
        networkInterfaces['Ethernet'].forEach(ether => {
            if (ether.family === 'IPv4') {
                publicIp = `http://${ether.address}:${port}`
            }
        })
        if (publicIp === '') {
            publicIp = "Aucune adresse IPv4 n'a été trouvée pour ce réseau Wi-Fi !"
        }
    }
    else {
        publicIp = "Votre adresse IP sur le réseau est introuvable !"
    }
    return (publicIp)
}