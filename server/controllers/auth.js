import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import  jwt  from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { username, password } = req.body 
        const isUsed = await User.findOne({ username} )
        if (isUsed) {
            return  res.json({message: 'User`s name in use'})
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash
        })
          const token = jwt.sign({
            id: newUser._id
        }, process.env.JWT_SECRET, { expiresIn: '30d' })
        await newUser.save()
        res.json({
            newUser,
            token,
            message: 'Register successful'
        })
    } catch (error) {
        res.json({message: 'Error create user'})
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.json({
                message: 'User not found'
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.json({
        message: 'Name or password wrong'
    })
        }
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET, { expiresIn: '30d' })
        res.json({
            token,
            user,
            message: "You in"
        })
    } catch (error) {
           res.json({message: 'Error  user'})
    }
}

export const current = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
            if (!user) {
            return res.json({
                message: 'User not found'
            })
        }
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET, { expiresIn: '30d' })
        res.json({
            token,
            user,
            message: "You in"
        })
        res.json({
            user, token
        })
    } catch (error) {
          res.json({message: 'Unauthorized'})
    }
}