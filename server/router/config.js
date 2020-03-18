// const db = require('../tool/db.js');
const apiResult = require('../tool/apiResult.js')
// const ObjectID = require('mongodb').ObjectID;

module.exports = {
	reg(app){
		app.post('/queryUserInfo',async (req,res) => {
				// console.log('proname:',req.body.proName)
				let tableName = req.body.username;
				// let goods = {
				// 	pId:req.body.pId,
				// 	proName:req.body.proName,
				// 	actPrice:req.body.actPrice,
				// 	jxPrice:req.body.jxPrice,
				// 	imgPath:req.body.imgPath,
				// 	qty: 1
				// }

				// let g_result = await db.insert(tableName,goods);

        res.send({
          code: 0,
          data: {
            nickName: 'aa'
          }
        })
    }),
    app.post('/queryBanners', async (req, res) => {
      let banners = [];
      for (let index = 0; index < 5; index++) {
        banners.push({
          id: index,
          text: index
        })
      }
      res.send({
        code: 0,
        data: banners
      })
    }),
    app.post('/queryGrid', async (req, res) => {
      let grids = [];
      for (let index = 0; index < 8; index++) {
        grids.push({
          id: index,
          text: index + '',
          icon: 'fire'
        })
      }
      res.send({
        code: 0,
        data: grids
      })
    })
	}
}
