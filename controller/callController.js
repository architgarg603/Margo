const { uuid } = require("uuidv4");
const nodemailer = require("nodemailer");

const callHandler = async (req, res) => {
  try {
    let id = uuid();
    let link = `http://localhost:3000/connect?appid=29e55ef2413b499287a93d636bfe9979&channel=${id}`;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "architg603@gmail.com", // generated ethereal user
        pass: "pchgajwpxjnduanc"
      },
    });

    // send mail with defined transport object
    let info =  transporter.sendMail({
      from: 'architg603@gmail.com', // sender address
      to: req.body.mail, // list of receivers
      subject: "Call Over Margo", // Subject line
      text: link, // plain text body
    }).catch((err)=>{
        console.log(err)
    });

    res.status(200).json({
        id:id
    })
  } catch (err) {
      console.log(err)
    res.status(500).json({
      msg: "Faild to make call",
    });
  }
};

module.exports.callHandler = callHandler;