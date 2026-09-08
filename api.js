const schemamodel = require('./schema')
const postapi = async (req, res) => {
    try {
        const { text } = req.body;

        const addTask = await schemamodel.create({ text })

        return res.status(200).json({ message: "data post success" })
    } catch (error) {
        console.log('post api error', error)
    }
}

const getapi = async (req, res) => {
    try {
        const getdata = await schemamodel.find()
        res.send(getdata)
    } catch (error) {
        console.log('error', error)
    }
}

const updateapi = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const updatedata = await schemamodel.findByIdAndUpdate(id, { text })
        res.send(updatedata)

    } catch (error) {
        console.log('error', error)
    }
}


const deleteapi = async (req, res) => {
    try {

        const { id } = req.params

        const deletedata = await schemamodel.findByIdAndDelete(id)
        res.send(deletedata)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { postapi, getapi, updateapi, deleteapi }