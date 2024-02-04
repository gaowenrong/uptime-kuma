exports.up = function (knex) {
    return knex.schema
        .alterTable("monitor", function (table) {
            table.string("custom_auth_url", 2048).nullable(); // 假设 URL 可能很长
            table.text("custom_auth_param").nullable(); // 使用 text 类型，因为参数可能是较长的 JSON 字符串
            table.string("custom_auth_data", 255).nullable(); // 通常键路径不会太长
        });
};

exports.down = function (knex) {
    return knex.schema
        .alterTable("monitor", function (table) {
            table.dropColumn("custom_auth_url");
            table.dropColumn("custom_auth_param");
            table.dropColumn("custom_auth_data");
        });
};
