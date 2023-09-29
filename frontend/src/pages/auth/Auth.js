import React from 'react'
import { Login } from './Login'
import { SignUp } from './SignUp'
import './AuthStyle.css'

export const Auth = () => {
  return (
    <div className='custom-section full-bg'>
		<div className="custom-container">
			<div className="custom-row full-height center-content">
				<div class="custom-class">
					<div className="custom-class-2">
						<h4 class="my-heading"><span class="login">Log In </span><span class="separator">| </span><span class="signup">Sign Up</span></h4>
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
