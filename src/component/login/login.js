import React,{Component} from "react";
import "./login.css";
export default class Login extends Component{
    render(){
        return(
            <div className="login">
                {/*<p onClick={this.close.bind(this)}>X</p>*/}
                <p>X</p>
                <div className="main">
                    <p>登录</p>
                    <p>手机号码</p>
                    <div>
                        <select name="" id="">
                            <option value="1">+86</option>
                        </select>
                        <input type="text" placeholder="请输入手机号码"/>
                    </div>
                    <div>
                        <input type="text" placeholder="请输入验证号"/>
                        {/*<button onClick={this.getMatchNumber.bind(this)}>获取验证码</button>*/}
                        <button>获取验证码</button>
                    </div>
                    <div>
                        {/*<button onClick={this.changeLoginWay.bind(this)}>密码登录 ></button>*/}
                        <button>密码登录 ></button>
                    </div>
                    <div>
                        {/*<button onClick={this.changestate.bind(this,0)}>登陆</button>*/}
                        {/*<button onClick={this.changestate.bind(this,1)}>注册</button>*/}
                        <button>登陆</button>
                        <button>注册</button>
                    </div>
                </div>
            </div>
        )
    }
}