import Diciplina from "../models/Diciplina";

// CRUD - Create | Read | Update | Delete

class DiciplinaController {
  async index(req, res) {
    try {
      const disciplinas = await Diciplina.find();

      return res.status(200).json(disciplinas);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }

  async teste(req, res) {
    return res.status(200).json({ message: `Tudo Certo` });
  }

  async store(req, res) {
    
    try {
      const diciplina = await Diciplina.create(req.body);

      return res.status(201).json(diciplina);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }

  async missing_id(req, res) {
    return res.status(400).json({ message: `Insira um id ` });
  }

  async update(req, res) {

    const { id } = req.params;

    const diciplinaToUpdate = await Diciplina.findOne({
      id: id,
    });

    if(!diciplinaToUpdate){
      return res
        .status(422)
        .json({message : "Usuário não existe, ou ID inválido"})
    }

    await Diciplina.update({id: id},req.body);

    return res.status(200).json({message: "A Diciplina foi atualizada"})

  }

  async delete(req, res) {
    const { id } = req.params;

    const diciplinaToDelete = await Diciplina.findOne({
      id: id,
    });

    if(!diciplinaToDelete){
      return res
        .status(422)
        .json({message : "Usuário não existe, ou ID inválido"})
    }

    await Diciplina.deleteOne({id: req.params.id});
   // await Diciplina.delete(req.body);

    return res.status(200).json({message: "A Diciplina foi deletada"})

  }

}

export default new DiciplinaController();
