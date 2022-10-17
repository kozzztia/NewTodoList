import React from 'react';
import {stateType} from "../store/type";
import {Button, Divider, Form, Input} from "antd";

type SetFlagTypes = {
    setIsAuth :  React.Dispatch<React.SetStateAction<boolean>>,
    users : stateType,
}



const LoginForm = ({setIsAuth , users} : SetFlagTypes) => {
    const onIsAuthHandler = (e: React.SyntheticEvent<string>):void => {
        setIsAuth(true)
    }
    return (
        <>
            <Divider orientation="left">Login form</Divider>
        <Form
            className="loginForm"
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            onFinish={(e)=>onIsAuthHandler(e)}
            // autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"

                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </>
    );
};

export default LoginForm;
