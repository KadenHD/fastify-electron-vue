import chalk from 'chalk'

export const errorMsg = (msg: string) => {
    return `${chalk.red('ERROR:  ')} ${msg}`
}

export const successMsg = (msg: string) => {
    return `${chalk.green('SUCCESS:')} ${msg}`
}

export const infoMsg = (msg: string) => {
    return `${chalk.yellow('INFO:   ')} ${msg}`
}