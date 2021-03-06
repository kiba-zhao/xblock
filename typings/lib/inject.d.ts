/**
 * 依赖对象描述
 */
export type Dependency = {
    /**
     * 是否必要
     */
    required: boolean;
    /**
     * 唯一标识
     */
    id: string | Symbol;
    /**
     * 依赖模块转换
     */
    transform: Function;
};
/**
 * 注入可选项
 */
export type InjectOpts = {
    /**
     * 依赖模块项
     */
    deps: Array<string> | Array<Symbol> | Array<Dependency>;
    /**
     * 构造对象命名
     */
    name: string | Symbol;
};
/**
 * 提供可选项
 */
export type ProvideOpts = {
    /**
     * 依赖模块项
     */
    dep: string | Symbol | Dependency;
    /**
     * 对象属性名
     */
    property: string;
};
/**
 * 依赖对象描述
 * @typedef {Object} Dependency
 * @property {boolean} required 是否必要
 * @property {String|Symbol} id 唯一标识
 * @property {Function} transform 依赖模块转换
 */
/**
 * 注入可选项
 * @typedef {Object} InjectOpts
 * @property {Array<String> | Array<Symbol> | Array<Dependency>} deps 依赖模块项
 * @property {String|Symbol} name 构造对象命名
 */
/**
 * 构造注入帮助函数,定义构造对象所需要的依赖模块,以及构造对象的命名
 * @param {Class|Function|any} target 注入对象:函数/类/对象等
 * @param {InjectOpts} opts 注入选项
 */
export function inject(target: any | Function | any, opts: InjectOpts): any;
/**
 * 提供可选项
 * @typedef {Object} ProvideOpts 提供可选项
 * @property {String | Symbol | Dependency} dep 依赖模块项
 * @property {String} property 对象属性名
 */
/**
 * 提供注入函数,将依赖模块设置为对象成员属性
 * @param {any} target 提供对象
 * @param {ProvideOpts} opts 可选项
 */
export function provide(target: any, opts: ProvideOpts): void;
/**
 * 获取inject信息
 * @param {any} module 注入模块
 * @return {InjectOpts} 注入可选项
 */
export function getInjectInfo(module: any): InjectOpts;
/**
 * 获取Provide信息
 * @param {any} module 注入模块
 * @return {ProvideInfo} Provide定义的信息
 */
export function getProvideInfo(module: any): any;
