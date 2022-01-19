export const plugins = [
  {
    id: 'dialogflow',
    resolve: require('@botonic/plugin-dialogflow'),
    // Copy-past here the generated JSON: https://dialogflow.com/docs/reference/v2-auth-setup
    options: {
      credentials: {
        type: "service_account",
        project_id: "mybot-336702",
        private_key_id: "200a3ba4dcae4331ff66bf938c0ce8ccb25166c6",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDhyjSQh7ZCfaUK\nw3x45NVcXf2waUjt9cNqP7LsXVyPYohq3WeP2cv5AxM2qfoBSZk3CbMNN8zq/NnE\nRm9gGF2uv1PnBSoCoRn1T9qmg53qq1RxJrlw8lqYHUrZ/OykfTgs3/CEYebGxrxQ\nIPqUR3XRzCSPMioO2Y2ruSAIgCZ5+Mn3LhipsXaxfh7HF0GS4YsKzNORCOs1G+7D\nzdTGviefzvXEKH9xoV0n5yY3S+8f8gzDWooI5zJSe3NFtysppz1p++rZwgYOkT1W\nJb5WrUcWp9bs6EBqRA4cJMBfViCtTZyEvz4jSYcNzzdSpGHhmvKcwd7fUpNCDyg5\nKHfQWpl/AgMBAAECggEAX918Au90DXgORmsooqW6By0rBKc3HT2PGkHwZFXhckmK\nFSFrEpMM/O12z2tM6BYJFOqr2I1cFluD1Ed5i0ndINBAPeKd6x7eiB6+/Zr9RgE3\naZFhA9kKaPJq8PHnwZEe9EKienqcwsHne3f9HE7Y8doknZ3VaJerBIGl3aYXcApK\ntF+zu5bsZyOmkNoXRzdiXhPp0oG9Lo1VJpJAkiU8qQwTyYi1vObqFRInUt5F0a0M\nDNlwxA56hiCxnsSjW5IQmMsdgMcXqhKAS29WxlbseuZN0H+QvWUkZU3a4L4M5Xkm\nsy0qDNq44H8e7H0f8jMJ0Lt05oYFXX+d+ToLOM0zzQKBgQD93F20OVWT1zq/Ts9o\nSxM3Tg5MCcLsUdqj/zIbDDsWPiYy3KHmpsyio/hjGLf6O3eomxUkiXNejzv8Hjbv\nENO9jdtHfRmFvbtXOJdomF2jRSGa3+VtzmitKXSdnOk0i2o4lYzN1JZMEVc4Hp7O\nMLWp9cnGJkMmLsLK05Y2gM8v0wKBgQDjsUi4f5aiUTdylU5K05LlzfSKQcsBdzeP\nnSr/sm1Birjbzb8xpdz6CJxwl+/T+YP8JmrV6kFYUW9WHLYYnCL7pSsN++YdjzKR\nrmcSOLaXfLpoKuYiYSR0AuRRTpT3B6A32T8iBKi3kZEttY0F1ImOxzj2GR/zXaeI\nzy9NizaQJQKBgGqYoOQvewbERo/USPUzKRN8/DXjl2ziBhv86Y4/+YOifym2SWlv\nutfEYGVEGOTDGcC7tgoMiVw4aui3yzthZnfe3CfNmOz2uXardbBe4lrPiYfd4hnU\npVGo6aXRIH+G1wiBi4lWbfHtCiGvgeF0xKNkaOCCaona8sJ2TEoAln8vAoGBANoa\ngvdAOFGpjHx06rcgbZE1tK4PEd+IjC9ENOET0DY9JJBgSGnNYJwdTYVI9RFO7I/H\nWQUpzIhGEWkiPYfbYGM+trxBdA8SkTUdI1w/+R+o+YI4vZNnDB0YfA4qQOVUZ7O3\npRL39YlJphBr3PcdvNqImVabgJCFQKr7E2urE4wFAoGBAMXwnavNbmPPBBzwVSGa\nsTU1W+JQaCKJb9Az8AeFcGbcrKh/Ny3XEJLELC2EzNkO/3116YE1xNtFwb5wnYJI\nYxx4qVQ6rdEeTJBFwoxH+jv3C7jRY3wJUfxc7+XmZaf0teY0fdNxSobnz+MNJU4B\nNMTZTLwUGyiUlw0fw2cEfoWF\n-----END PRIVATE KEY-----\n",
        client_email: "dialogflow@mybot-336702.iam.gserviceaccount.com",
        client_id: "101757474902211207865",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow%40mybot-336702.iam.gserviceaccount.com",      
      }
    },
  },
]
