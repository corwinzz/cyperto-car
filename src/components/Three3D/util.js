import * as THREE from 'three'
export const isGLTF1 = function(contents) {
    let resultContent
    if (typeof contents === 'string') {
        resultContent = contents
    } else {
        let magic = THREE.LoaderUtils.decodeText(new Uint8Array(contents, 0, 4))
        if (magic === 'glTF') {
            let version = new DataView(contents).getUint32(4, true)
            return version < 2
        } else {
            resultContent = THREE.LoaderUtils.decodeText(new Uint8Array(contents))
        }
    }
    let json = JSON.parse(resultContent)
    return ((json.asset !== undefined) && json.asset.version[0] < 2)
}
