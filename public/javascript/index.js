document.querySelector('#send-data').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#data-input').value;
    if (input) {
      fetch(`/${input}`).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => document.querySelector('#return-object').innerHTML = JSON.stringify(data))
        }
      }).catch(e => console.error(e)).finally(() => document.querySelector('#data-input').value = '')
    }
})
