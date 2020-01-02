## v-model
>v-model指令的本质是:它负责监听用户的输入事件，从而更新数据，并对一些极端场景进行一些特殊处理。同时，v-model会忽略所有表单元素的value、checked、selected特性的初始值，它总是将vue实例中的数据作为数据来源。 然后当输入事件发生时，实时更新vue实例中的数据。

>可以使用于：`input`, `select`, 和 `textarea`。
