import React from 'react';

import {Button, Divider, Form, Input} from "antd";
import {useNavigate} from "react-router-dom";

interface LoginFormInterface {
    setIsAuth : React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm = () => {
    const navigate = useNavigate()
    return (
        <>
            <Divider orientation="left" >Login form</Divider>

        <Form
            className="loginForm"
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            onFinish={(e)=> navigate("/todo_page")}


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
