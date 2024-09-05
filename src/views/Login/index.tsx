import React, { memo, useState } from "react";
import type { FormProps } from "antd";
import { Button, Card, Form, Input } from "antd";
import { defineMessages, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

const Login = memo(() => {
  const [loading] = useState<boolean>(false);

  type FieldType = {
    username?: string;
    password?: string;
  };

  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    navigate("/home");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const intl = useIntl();

  const messages = defineMessages({
    adminName: {
      id: "adminName",
      defaultMessage: "后台管理系统",
    },
    inputUserName: {
      id: "inputUserName",
      defaultMessage: "用户名不能为空",
    },
    inputPassword: {
      id: "inputPassword",
      defaultMessage: "密码不能为空",
    },
    loginButton: {
      id: "loginButton",
      defaultMessage: "登录",
    },
    passwordLength: {
      id: "passwordLength",
      defaultMessage: "密码至少8位",
    },
  });

  const passwordValidator = (_: any, value: any) => {
    if (!value) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.inputPassword))
      );
    }
    if (value.length < 8) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.passwordLength))
      );
    }
    return Promise.resolve();
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <Card hoverable style={{ padding: 48 }} loading={loading}>
        <div className="flex">
          <img
            src={require("@/assets/images/login/logo.png")}
            alt="Logo"
            className="w-42 h-64"
          />
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-xl font-bold mb-4">
              {intl.formatMessage(messages.adminName)}
            </h1>

            <Form
              className="w-80"
              name="basic"
              labelCol={{ span: 8 }}
              style={{ maxWidth: 600 }}
              initialValues={{
                username: "admin",
                password: "123456",
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                name="username"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage(messages.inputUserName),
                  },
                ]}
              >
                <Input
                  className="w-full h-10"
                  placeholder={intl.formatMessage(messages.inputUserName)}
                  allowClear
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="password"
                hasFeedback
                rules={[
                  {
                    validator: passwordValidator,
                  },
                ]}
              >
                <Input.Password
                  className="w-full h-10"
                  placeholder={intl.formatMessage(messages.inputPassword)}
                  allowClear
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full h-10 mt-8 "
                >
                  {intl.formatMessage(messages.loginButton)}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
});

export default Login;
