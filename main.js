/* Show Hidden - Password */

const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass),
    iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () => {
        //Change password to text
        if(input.type === 'password') {
            // Switch to text
            input.type = 'text'

            // Add Icon
            iconEye.classList.add('ri-eye-line')
            
            // Remove Icon
            iconEye.classList.remove('ri-eye-off-line')

        }else {
            // Change to password
            input.type = 'password'

            // Remove Icon
            iconEye.classList.remove('ri-eye-line')

            // Add Icon
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('input-pass','input-icon')