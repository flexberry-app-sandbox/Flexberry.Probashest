﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probashest
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Док регист карты.
    /// </summary>
    // *** Start programmer edit section *** (ДокРегистКарты CustomAttributes)

    // *** End programmer edit section *** (ДокРегистКарты CustomAttributes)
    [AutoAltered()]
    [Caption("Док регист карты")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДокРегистКартыE", new string[] {
            "Дата as \'Дата\'",
            "Гость as \'Гость\'",
            "Гость.ФИО as \'ФИО\'",
            "Комнаты as \'Комната\'",
            "Комнаты.Номер as \'Номер\'",
            "Карты as \'Карты\'",
            "Карты.КодКарты as \'Код карты\'",
            "Сотрудник as \'Ответственный\'",
            "Сотрудник.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Гость.ФИО",
            "Комнаты.Номер",
            "Карты.КодКарты",
            "Сотрудник.ФИО"})]
    [MasterViewDefineAttribute("ДокРегистКартыE", "Гость", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ДокРегистКартыE", "Комнаты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    [MasterViewDefineAttribute("ДокРегистКартыE", "Карты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "КодКарты")]
    [MasterViewDefineAttribute("ДокРегистКартыE", "Сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ДокРегистКартыL", new string[] {
            "Дата as \'Дата\'",
            "Сотрудник.ФИО as \'ФИО\'",
            "Комнаты.Номер as \'Номер\'",
            "Карты.КодКарты as \'Код карты\'",
            "Гость.ФИО as \'ФИО\'"})]
    public class ДокРегистКарты : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private IIS.Probashest.Сотрудник fСотрудник;
        
        private IIS.Probashest.Комнаты fКомнаты;
        
        private IIS.Probashest.Карты fКарты;
        
        private IIS.Probashest.Гость fГость;
        
        // *** Start programmer edit section *** (ДокРегистКарты CustomMembers)

        // *** End programmer edit section *** (ДокРегистКарты CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ДокРегистКарты.Дата CustomAttributes)

        // *** End programmer edit section *** (ДокРегистКарты.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Дата Get start)

                // *** End programmer edit section *** (ДокРегистКарты.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ДокРегистКарты.Дата Get end)

                // *** End programmer edit section *** (ДокРегистКарты.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Дата Set start)

                // *** End programmer edit section *** (ДокРегистКарты.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ДокРегистКарты.Дата Set end)

                // *** End programmer edit section *** (ДокРегистКарты.Дата Set end)
            }
        }
        
        /// <summary>
        /// Док регист карты.
        /// </summary>
        // *** Start programmer edit section *** (ДокРегистКарты.Гость CustomAttributes)

        // *** End programmer edit section *** (ДокРегистКарты.Гость CustomAttributes)
        [PropertyStorage(new string[] {
                "Гость"})]
        [NotNull()]
        public virtual IIS.Probashest.Гость Гость
        {
            get
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Гость Get start)

                // *** End programmer edit section *** (ДокРегистКарты.Гость Get start)
                IIS.Probashest.Гость result = this.fГость;
                // *** Start programmer edit section *** (ДокРегистКарты.Гость Get end)

                // *** End programmer edit section *** (ДокРегистКарты.Гость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Гость Set start)

                // *** End programmer edit section *** (ДокРегистКарты.Гость Set start)
                this.fГость = value;
                // *** Start programmer edit section *** (ДокРегистКарты.Гость Set end)

                // *** End programmer edit section *** (ДокРегистКарты.Гость Set end)
            }
        }
        
        /// <summary>
        /// Док регист карты.
        /// </summary>
        // *** Start programmer edit section *** (ДокРегистКарты.Карты CustomAttributes)

        // *** End programmer edit section *** (ДокРегистКарты.Карты CustomAttributes)
        [PropertyStorage(new string[] {
                "Карты"})]
        [NotNull()]
        public virtual IIS.Probashest.Карты Карты
        {
            get
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Карты Get start)

                // *** End programmer edit section *** (ДокРегистКарты.Карты Get start)
                IIS.Probashest.Карты result = this.fКарты;
                // *** Start programmer edit section *** (ДокРегистКарты.Карты Get end)

                // *** End programmer edit section *** (ДокРегистКарты.Карты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Карты Set start)

                // *** End programmer edit section *** (ДокРегистКарты.Карты Set start)
                this.fКарты = value;
                // *** Start programmer edit section *** (ДокРегистКарты.Карты Set end)

                // *** End programmer edit section *** (ДокРегистКарты.Карты Set end)
            }
        }
        
        /// <summary>
        /// Док регист карты.
        /// </summary>
        // *** Start programmer edit section *** (ДокРегистКарты.Комнаты CustomAttributes)

        // *** End programmer edit section *** (ДокРегистКарты.Комнаты CustomAttributes)
        [PropertyStorage(new string[] {
                "Комнаты"})]
        [NotNull()]
        public virtual IIS.Probashest.Комнаты Комнаты
        {
            get
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Комнаты Get start)

                // *** End programmer edit section *** (ДокРегистКарты.Комнаты Get start)
                IIS.Probashest.Комнаты result = this.fКомнаты;
                // *** Start programmer edit section *** (ДокРегистКарты.Комнаты Get end)

                // *** End programmer edit section *** (ДокРегистКарты.Комнаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Комнаты Set start)

                // *** End programmer edit section *** (ДокРегистКарты.Комнаты Set start)
                this.fКомнаты = value;
                // *** Start programmer edit section *** (ДокРегистКарты.Комнаты Set end)

                // *** End programmer edit section *** (ДокРегистКарты.Комнаты Set end)
            }
        }
        
        /// <summary>
        /// Док регист карты.
        /// </summary>
        // *** Start programmer edit section *** (ДокРегистКарты.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (ДокРегистКарты.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Probashest.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Сотрудник Get start)

                // *** End programmer edit section *** (ДокРегистКарты.Сотрудник Get start)
                IIS.Probashest.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (ДокРегистКарты.Сотрудник Get end)

                // *** End programmer edit section *** (ДокРегистКарты.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокРегистКарты.Сотрудник Set start)

                // *** End programmer edit section *** (ДокРегистКарты.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (ДокРегистКарты.Сотрудник Set end)

                // *** End programmer edit section *** (ДокРегистКарты.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДокРегистКартыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокРегистКартыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокРегистКартыE", typeof(IIS.Probashest.ДокРегистКарты));
                }
            }
            
            /// <summary>
            /// "ДокРегистКартыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокРегистКартыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокРегистКартыL", typeof(IIS.Probashest.ДокРегистКарты));
                }
            }
        }
    }
}
