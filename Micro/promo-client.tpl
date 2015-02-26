<div class="promo-head">
    <h4>超值优惠，知您所需！</h4>
</div>
<div class="promo-ticket">
    <div class="ticket">
        <div class="shop-name">@{it.shopname}</div>
        <div class="tit">@{it.couponname}</div>
        <div class="price">￥<b>@{it.couponprice}</b></div>
        <div class="tips">@{it.extrainfo}</div>
    </div>
    <div class="btn-box">
        <?js if (it.newtoken != "null") {?>
            <a class="btn-stress" data-token="@{it.newtoken}" data-launchId="@{it.launchId}" href="javascript:;">收进我的钱包</a>
        <?js } else {?>
            <a class="btn-stress" data-launchId="@{it.launchId}" href="javascript:;">收进我的钱包</a>
        <?js }?>
        <a href="javascript:;">不用，谢谢</a>
    </div>
</div>
<div class="shop-info">
    <a href="##">
        <div class="pic"><img src="@{it.shoppic}" /></div>
        <div class="txt">
            <div class="tit">@{it.shopname}</div>
            <div class="comm">
                <span class="star star-@{it.shoppower}"></span>
                <span class="comm-num">@{it.reviewcount}条</span>
                <span class="price">¥<b>@{it.avg}/人</b></span>
            </div>
            <div class="info">
                <div class="tags"><span>@{it.region}</span><span>@{it.category}</span></div>
                <div class="dist">@{it.dis}</div>
            </div>
        </div>
    </a>
</div>