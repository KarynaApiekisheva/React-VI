import React, { Component } from 'react';

import Logo from '../img/logo.png';

class Login extends Component {
  render() {
    return (
      <div className="login_page_styles">
        <div className="wrapper">
          <div className="container">
            <div className="head-login">
              <div className="logo">
                <a href="#">
                  <img src={Logo} alt=""/>
                </a>
              </div>
              <ul className="leng-list">
                <li className="active"><a href="#">En</a></li>
                <li><a href="#">Ru</a></li>
                <li><a href="#">He</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

// import React, { Component } from 'react'
// import { AUTH_TOKEN } from '../constants'
// import { Mutation } from 'react-apollo'
// import gql from 'graphql-tag'

// const SIGNUP_MUTATION = gql`
//   mutation SignupMutation($email: String!, $password: String!, $name: String!) {
//     signup(email: $email, password: $password, name: $name) {
//       token
//     }
//   }
// `

// const LOGIN_MUTATION = gql`
//   mutation LoginMutation($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//     }
//   }
// `

// class Login extends Component {
//   state = {
//     login: true, // switch between Login and SignUp
//     email: '',
//     password: '',
//     name: '',
//   }

//   render() {
//     const { login, email, password, name } = this.state
//     return (
//       <div>
//         <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
//         <div className="flex flex-column">
//           {!login && (
//             <input
//               value={name}
//               onChange={e => this.setState({ name: e.target.value })}
//               type="text"
//               placeholder="Your name"
//             />
//           )}
//           <input
//             value={email}
//             onChange={e => this.setState({ email: e.target.value })}
//             type="text"
//             placeholder="Your email address"
//           />
//           <input
//             value={password}
//             onChange={e => this.setState({ password: e.target.value })}
//             type="password"
//             placeholder="Choose a safe password"
//           />
//         </div>
//         <div className="flex mt3">
//           <Mutation
//             mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
//             variables={{ email, password, name }}
//             onCompleted={data => this._confirm(data)}
//           >
//             {mutation => (
//               <div className="pointer mr2 button" onClick={mutation}>
//                 {login ? 'login' : 'create account'}
//               </div>
//             )}
//           </Mutation>
//           <div
//             className="pointer button"
//             onClick={() => this.setState({ login: !login })}
//           >
//             {login ? 'need to create an account?' : 'already have an account?'}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   _confirm = async data => {
//     const { token } = this.state.login ? data.login : data.signup
//     this._saveUserData(token)
//     this.props.history.push(`/`)
//   }

//   _saveUserData = token => {
//     localStorage.setItem(AUTH_TOKEN, token)
//   }
// }

// export default Login