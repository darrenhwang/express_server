module H {
    /** IncomingMessage下绑定一个  userInfo */
    export const IncomingMessage = require('http').IncomingMessage;
    Object.defineProperty(IncomingMessage.prototype, 'userInfo', {
        get: function (): [string, UserInfo] {
            let err;
            if (!this.headers.userinfo) err = '身份信息缺失请重新登录';
            try {
                let userInfo: UserInfo = decryptToObj(this.headers.userinfo, 'userInfo');
                if (!userInfo.userid) err = '身份信息缺失请重新登录';
                return [err, userInfo];
            } catch (e) {
                return['身份数据有误', null];
            }
        }
    })
}

namespace CONST {
    /**
     * 角色属性
     */
    export const enum roleAttr {
        /** 最终生命 */
        hp = -1,
        /** 最终攻击力 */
        atk = -2,
        /** 最终防御力 */
        def = -3,
        /** 最终魔力 */
        magic = -4,

        /** 生命 */
        baseHp = 1,
        /** 攻击力 */
        baseAtk = 2,
        /** 防御力 */
        baseDef = 3,
        /** 魔力 */
        baseMagic = 4,

        /** 生命(万分比) */
        hpPer = 11,
        /** 攻击力(万分比) */
        atkPer = 12,
        /** 防御力(万分比) */
        defPer = 13,
        /** 魔力(万分比) */
        magicPer = 14,

        /** 禁锢(万分比) */
        stun = 21,
        /** 躲避(万分比) */
        dodge = 22,
        /** 连击(万分比) */
        batter = 23,
        /** 反击(万分比) */
        back = 24,
        /** 暴击(万分比) */
        crit = 25,

        /** 禁锢抵抗(万分比) */
        stunDef = 41,
        /** 躲避抵抗(万分比) */
        dodgeDef = 42,
        /** 连击抵抗(万分比) */
        batterDef = 43,
        /** 反击抵抗(万分比) */
        backDef = 44,
        /** 暴击抵抗(万分比 )*/
        critDef = 45,

        /** 吸血%s(万分比) */
        suck = 61,
        /** 降低吸血%s(万分比) */
        suckDef = 62,
        /** 增加爆伤%s(万分比) */
        critDmgInc = 63,
        /** 降低爆伤%s(万分比) */
        critDmgRed = 64,
        /** 降低%s回复(万分比) */
        recoverRed = 65,
        /** 第五回合生命恢复%s(万分比) */
        recover5 = 66,
        /** 魔力减少%s(万分比) */
        magicRed = 67,
        /** 魔力增加%s(万分比) */
        magicInc = 68,

        /** 伤害增加%s(万分比) */
        dmgInc = 101,
        /** 伤害减少%s(万分比) */
        dmgRed = 102,

        /** 生命上限增加%s(万分比) */
        sp_hpMaxInc = 201,
        /** 每回合生命恢复%s */
        sp_roundRecover = 202,
        /** 魔力增强%s(万分比) */
        sp_magicInc = 203,
        /** 五项属性中最高项提升%s(万分比) */
        sp_topInc = 204,

        /** 触发禁锢伤害加成%s(万分比) */
        sp_stunDmgInc = 301,
        /** 被禁锢时可触发躲避，并恢复%s(万分比) */
        sp_stunDodge = 302,
        /** 可持续连击，概率几率为上次的%s(万分比) */
        sp_batterContinue = 303,
        /** 被禁锢时可触发反击，反击触发时提高伤害%s(万分比) */
        sp_stunBack = 304,
        /** 每次触发暴击后增加攻击力%s(万分比) */
        sp_everyCritDmgInc = 305,
        /** 吸血提高(万分比) */
        sp_suckInc = 306,
        /** 反击转化为连击，且连击额外提高%s(万分比) */
        sp_back2batter = 307,
        /** 复活一次，并恢复%s生命，并提高%s的攻击和防御(万分比) */
        sp_relive = 308,

        /** 平均五项抵抗属性，并提高%s(万分比) */
        sp_defAvg5 = 401,
        /** 每比对方高%s魔力值，伤害提高%s(万分比) */
        sp_magicHighDmgInc = 402,
        /** 血量每降低%s,伤害提高%s(万分比) */
        sp_hpLowDngInc = 403,
        /** 平均五项特殊属性,并提高%s(万分比) */
        sp_avg5 = 404,

        /** 装备出售金币增加 */
        earnCoin = 501,
        /** 竞技场获胜金币增加 */
        winCoin = 502,
        /** 增加挑战券获得上限 */
        challenger = 503,
        /** 魔法阵探索坑位增加 */
        explore = 504,
        /** 排位赛匹配次数购买上限增加 */
        rbNormalBuy = 505,

        /** 一击必杀 */
        oneKill = 1000,
    }
}