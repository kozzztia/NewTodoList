import React from 'react';

import {Button, Divider, Form, Input} from "antd";
import {formValue, LoginFormInterface} from "./type";



const LoginForm = ({users , setActiveUser , setIsAuth} : LoginFormInterface) => {

    const onIsAuthHandler = (e: formValue):void => {

        users.map(item => item.user === e.username && item.password === e.password &&
            setActiveUser(item))}
    return (
        <>
            <Divider orientation="left" >Login form</Divider>
        <Form
            className="loginForm"
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            onFinish={(e)=>onIsAuthHandler(e)}
            autoComplete="off"
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
