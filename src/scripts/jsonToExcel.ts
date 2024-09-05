const { Workbook } = require("exceljs");
const fs = require("fs");

const languages = ["zh-CN", "en-US"];

const jsonToExcel = () => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("数据");

  // 表头
  let columns = [
    { header: "ID", key: "id", width: 30 },
    ...languages.map((item) => {
      return {
        header: item,
        key: item,
        width: 30,
      };
    }),
  ];
  const bundleData = languages.map((item) => {
    return JSON.parse(fs.readFileSync(`../config/${item}.json`));
  });

  // 数据
  const data: any = [];
  bundleData.forEach((item, index) => {
    for (let key in item) {
      const foundItem = data.find((obj: any) => obj.id === key);
      if (foundItem) {
        foundItem[languages[index]] = item[key];
      } else {
        data.push({
          id: key,
          [languages[index]]: item[key],
        });
      }
    }
  });
  worksheet.columns = columns;
  worksheet.addRows(data);
  workbook.xlsx.writeFile("./data.xlsx");
};
jsonToExcel();
