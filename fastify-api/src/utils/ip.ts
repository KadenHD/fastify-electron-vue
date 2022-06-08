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
            publicIp = "No IPv4 adress found on this Wi-Fi"
        }
    }
    else if (networkInterfaces['Ethernet'] !== undefined) {
        networkInterfaces['Ethernet'].forEach(ether => {
            if (ether.family === 'IPv4') {
                publicIp = `http://${ether.address}:${port}`
            }
        })
        if (publicIp === '') {
            publicIp = "No IPv4 adress found on this Wi-Fi"
        }
    }
    else {
        publicIp = "No IPv4 adress found on this Wi-Fi"
    }
    return (publicIp)
}