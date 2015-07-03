/**
 * Created by XIAODI001 on 2015/6/25.
 * 这是一个新代码
 */
jsonp_pay (
    {
        "body": {
            "compress": false,
            "encrypt": false,
            "message": "查询订单成功(积分、现金都未付)",
            "result": {
                "orderId": "2015062500007126422",
                "prodName": "",
                "orderInfo": "平安金 投资金 平安标准金条 10克 9999千足金",
                "orderAmt": 1,
                "availablePoints": 1863518,
                "maxAvailablePoints": 500,
                "mabpFlag": "1",
                "maxAvailableAmt": 1,
                "minPaymentPoint": 1,
                "activeDesc": "",
                "preferentialAmt": 0,
                "pointsGateList": [
                    {
                        "gateId": "003016",
                        "pointsExchangeRate": "500",
                        "gateType": "57",
                        "availablePoints": "11285",
                        "maxAvailablePoints": "10000000",
                        "gateName": "寿险VIP",
                        "logoUrl": "image/cqhk.png",
                        "minAvailablePoints": "1",
                        "brandId": "h630",
                        "displayIndex": "1"
                    },
                    {
                        "gateId": "000100",
                        "pointsExchangeRate": "",
                        "gateType": "1",
                        "availablePoints": "1863518",
                        "maxAvailablePoints": "500.0",
                        "gateName": "万里通积分",
                        "logoUrl": "image/mgw.png",
                        "minAvailablePoints": "1.0",
                        "brandId": "",
                        "displayIndex": "2"
                    },
                    {
                        "gateId": "003001",
                        "pointsExchangeRate": "510",
                        "gateType": "57",
                        "availablePoints": "0",
                        "maxAvailablePoints": "32400",
                        "gateName": "酒仙",
                        "logoUrl": "image/mgw.png",
                        "minAvailablePoints": "1",
                        "brandId": "h5p1",
                        "displayIndex": "5"
                    },
                    {
                        "gateId": "003002",
                        "pointsExchangeRate": "525",
                        "gateType": "57",
                        "availablePoints": "0",
                        "maxAvailablePoints": "34500",
                        "gateName": "渔夫之宝",
                        "logoUrl": "image/yfzb.png",
                        "minAvailablePoints": "1",
                        "brandId": "h5mh",
                        "displayIndex": "6"
                    }
                ],
                "gateArr": [
                    {
                        "displayUrl": "",
                        "gateId": "000300",
                        "gateType": 2,
                        "gateBigType": "",
                        "gateName": "支付宝wap"
                    },
                    {
                        "displayUrl": "image/yqb_logo.png",
                        "gateId": "000800",
                        "gateType": 2,
                        "gateBigType": "",
                        "gateName": "壹钱包收银台"
                    },
                    {
                        "displayUrl": "image/zfb_logo.png",
                        "gateId": "000200",
                        "gateType": 2,
                        "gateBigType": "",
                        "gateName": "支付宝"
                    },
                    {
                        "displayUrl": "image/wx_logo.png",
                        "gateId": "001200",
                        "gateType": 2,
                        "gateBigType": "",
                        "gateName": "微信"
                    }
                ],
                "paidPointsList": [],
                "orderExpiredTime": "2015-06-25 10:10:26",
                "yqbGateSwitch": false,
                "currentCashGateId": ""
            },
            "statusCode": "0000"
        },
        "callBack": "jsonp_pay",
        "head": {
            "custString": "wlt_app_h5",
            "msgVersion": "1.1",
            "reqAppId": "ios",
            "reqTime": "1435204031080",
            "rspCode": "0",
            "rspDescription": "安全验证通过",
            "rspTime": "1435204220545"
        }
    }
)