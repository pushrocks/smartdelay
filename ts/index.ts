import 'typings-global'

export let delayFor = async <T>(timeInMillisecond: number, passOn?: T) => {
    await new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve()
            },
            timeInMillisecond
        )
    })
    return passOn
}
