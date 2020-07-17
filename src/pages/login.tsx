import React, { FormEvent, useState } from "react"

const Home = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  function submit(e: FormEvent) {
    e.preventDefault()
    alert(JSON.stringify(`${username} ${password}`))
  }
  return (
    <div>
      <form onSubmit={submit}>
        <table>
          <tr>
            <td>username</td>
            <td>
              <input
                type="text"
                value={username}
                onChange={e => {
                  setUsername(e.currentTarget.value)
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>password</td>
            <td>
              <input
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.currentTarget.value)
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <button>submit</button>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default Home
