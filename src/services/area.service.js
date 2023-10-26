const {models} = require('./../libs/sequelize')

class AreaService{
    constructor(){
        this.model = models.Area
    }

    async getAll(){
        const areas = await this.model.findAll()
        return areas
    }

    async create (code,name,observations,status){
        const area = await this.model.create({code,name,observations,status})
        return area
    }

    async findOne(id) {
        const area = await this.model.findByPk(id)
        return area
    }
    
    async update(id,values){
        const area = await this.findOne(id)
        if(!area) return null
        const updateUser = await area.update(values)
        return updateUser
    }

    async delete(id){
        const area = await this.findOne(id)
        if(!area) return null
        await area.destroy()
        return area.id
    }
}

module.exports = AreaService