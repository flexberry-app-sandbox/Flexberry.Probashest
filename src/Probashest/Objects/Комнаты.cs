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
    /// Комнаты.
    /// </summary>
    // *** Start programmer edit section *** (Комнаты CustomAttributes)

    // *** End programmer edit section *** (Комнаты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КомнатыE", new string[] {
            "Номер as \'Номер\'",
            "Этаж as \'Этаж\'",
            "КолвоМест as \'Колво мест\'"})]
    [View("КомнатыL", new string[] {
            "Номер as \'Номер\'",
            "Этаж as \'Этаж\'",
            "КолвоМест as \'Колво мест\'"})]
    public class Комнаты : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private int fЭтаж;
        
        private int fКолвоМест;
        
        // *** Start programmer edit section *** (Комнаты CustomMembers)

        // *** End programmer edit section *** (Комнаты CustomMembers)

        
        /// <summary>
        /// КолвоМест.
        /// </summary>
        // *** Start programmer edit section *** (Комнаты.КолвоМест CustomAttributes)

        // *** End programmer edit section *** (Комнаты.КолвоМест CustomAttributes)
        public virtual int КолвоМест
        {
            get
            {
                // *** Start programmer edit section *** (Комнаты.КолвоМест Get start)

                // *** End programmer edit section *** (Комнаты.КолвоМест Get start)
                int result = this.fКолвоМест;
                // *** Start programmer edit section *** (Комнаты.КолвоМест Get end)

                // *** End programmer edit section *** (Комнаты.КолвоМест Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комнаты.КолвоМест Set start)

                // *** End programmer edit section *** (Комнаты.КолвоМест Set start)
                this.fКолвоМест = value;
                // *** Start programmer edit section *** (Комнаты.КолвоМест Set end)

                // *** End programmer edit section *** (Комнаты.КолвоМест Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Комнаты.Номер CustomAttributes)

        // *** End programmer edit section *** (Комнаты.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Комнаты.Номер Get start)

                // *** End programmer edit section *** (Комнаты.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Комнаты.Номер Get end)

                // *** End programmer edit section *** (Комнаты.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комнаты.Номер Set start)

                // *** End programmer edit section *** (Комнаты.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Комнаты.Номер Set end)

                // *** End programmer edit section *** (Комнаты.Номер Set end)
            }
        }
        
        /// <summary>
        /// Этаж.
        /// </summary>
        // *** Start programmer edit section *** (Комнаты.Этаж CustomAttributes)

        // *** End programmer edit section *** (Комнаты.Этаж CustomAttributes)
        public virtual int Этаж
        {
            get
            {
                // *** Start programmer edit section *** (Комнаты.Этаж Get start)

                // *** End programmer edit section *** (Комнаты.Этаж Get start)
                int result = this.fЭтаж;
                // *** Start programmer edit section *** (Комнаты.Этаж Get end)

                // *** End programmer edit section *** (Комнаты.Этаж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Комнаты.Этаж Set start)

                // *** End programmer edit section *** (Комнаты.Этаж Set start)
                this.fЭтаж = value;
                // *** Start programmer edit section *** (Комнаты.Этаж Set end)

                // *** End programmer edit section *** (Комнаты.Этаж Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КомнатыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КомнатыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КомнатыE", typeof(IIS.Probashest.Комнаты));
                }
            }
            
            /// <summary>
            /// "КомнатыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КомнатыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КомнатыL", typeof(IIS.Probashest.Комнаты));
                }
            }
        }
    }
}
