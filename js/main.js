let selector = document.querySelector("#tel");
let im = new Inputmask("+48-999-999-999");
im.mask(selector)

let validation = new JustValidate("form");

validation.addField("#name", [
    {
        rule: "required",
        errorMessage: "Введите имя"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимум 2 символа!"
    },
    {
        rule: "maxLength",
        value: 16,
        errorMessage: "Максимум 16 символов"
    }
]).addField("#tel", [
    {
        rule: "required",
        errorMessage: "Введите телефон"
    },
    {
        validator: (value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Boolean(Number(phone) && phone.length === 9)
        },
        errorMessage: 'Введите телефон полностью'
    }
]).onSuccess(async function() {
    let data = {
        name: document.getElementById("name").value,
        tel: selector.inputmask.unmaskedvalue(),
        msg: document.getElementById("name").value
    }

    let response = await fetch("main.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    let result = await response.text()
    alert(result)
})