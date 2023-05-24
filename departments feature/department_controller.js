import department from "../models/departmant.js";

//++++++++ This function is used to get all data from database ++++++++ //
export const getAll = async (req, res) => {
    const departments = await department.find().lean();
    console.log(departments);
    res.render('departments/all', { departments });
};

//++++++++ This function is used to go to route create ++++++++ //
export const create = async (req, res) => {
    res.render("departments/create");
};

//++++++++ This function is used to store data in database ++++++++ //
export const store = async (req, res) => {
    const { name, code } = req.body;
    await department.create({
        name,
        code,
        
    });
    res.redirect('/departments');
};

//++++++++ This function is used to show details of each department ++++++++ //
export const show=async(req,res)=>{
    const {_id}=req.params
    console.log(_id);
  const singleDep =  await department.findById(_id).lean();

  res.render('departments/show',{department : singleDep})
}