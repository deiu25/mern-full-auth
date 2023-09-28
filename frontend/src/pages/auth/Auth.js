import React from 'react'
import { Login } from './Login'
import { SignUp } from './SignUp'
import './AuthStyle.css'

export const Auth = () => {
  return (
    <div className='section full-bg'>
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h4 className="mb-0 pb-4 text-light"><span>Log In </span><span>| </span><span>Sign Up</span></h4>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
                                <Login />
                                <SignUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
